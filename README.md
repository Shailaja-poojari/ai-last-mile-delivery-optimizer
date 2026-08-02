# AI-Powered Last-Mile Delivery Optimizer

An operations dashboard for last-mile delivery teams. The existing React interface, Supabase integration, maps, alerts, sustainability metrics, GPS, and offline support are preserved. The decision layer is now served by a FastAPI service:

```text
React + Vite dashboard
        │ REST
        ▼
FastAPI Delivery Intelligence API
   ├── XGBoost ETA regression model
   └── Google OR-Tools vehicle-routing solver
```

## What is genuinely AI-powered?

| Capability | Implementation | Classification |
| --- | --- | --- |
| Delivery ETA | XGBoost regression model trained on historical delivery records | Machine learning |
| Stop sequencing | Google OR-Tools capacity-constrained vehicle-routing problem solver | Operations research / optimization |
| Risk badges, festival and emergency modes | Existing application business rules | Business logic, not ML |

This distinction is deliberate: OR-Tools produces real optimized routes, but it is not a machine-learning model.

## AI service API

The FastAPI service exposes interactive OpenAPI documentation at `http://localhost:8000/docs`.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/health` | Confirms service status and model availability |
| POST | `/predict-eta` | Predicts one delivery ETA in minutes |
| POST | `/predict-etas` | Batch ETA predictions used by the dashboard |
| POST | `/optimize-route` | Solves a capacity-constrained route with OR-Tools |

`src/services/aiService.js` is the single frontend integration point. It calls the service when it is available; the original rule-based estimate remains only as an explicit offline/first-run fallback so the dashboard does not break without a network connection or a deployed model.

## Train the ETA model

The training process uses the public [Food Delivery Time Prediction Case Study dataset](https://www.kaggle.com/datasets/gauravmalik26/food-delivery-dataset). Download its CSV locally; Kaggle requires that step so credentials are never committed to this repository.

```bash
cd backend
python -m venv .venv
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python train_eta.py --data "path\\to\\Food Delivery Time Prediction Case Study.csv"
```

This creates `backend/models/eta_model.joblib` and `backend/models/metrics.json`. The metrics file records held-out MAE, RMSE, R², data split sizes, and model configuration output. It is intentionally generated from the actual downloaded dataset rather than inventing model metrics.

Features: route distance, traffic level, order hour, weather, number of remaining deliveries, festival indicator, and package weight. The cited dataset does not include parcel weight, so training uses a neutral 1 kg default for that feature; production data should replace it with observed weights before retraining.

## Run locally

Terminal 1 — API:

```bash
cd backend
uvicorn main:app --reload --port 8000
```

Terminal 2 — dashboard:

```bash
npm install
npm run dev
```

Vite proxies `/ai-api` to the local FastAPI service. For a deployed service, create `.env.local` in the frontend root:

```text
VITE_AI_API_URL=https://your-api.example.com
```

## Docker

After training the model, start the backend with:

```bash
docker compose up --build
```

The compose setup mounts `backend/models` so the trained artifact is available to the container. The frontend can continue to run through Vite during development or be deployed independently (for example, on Vercel) with `VITE_AI_API_URL` set to the API URL.

## Existing dashboard features

- Supabase-compatible optimized-order persistence
- Map and GPS tracking
- Offline cached delivery data
- Emergency and festival business modes
- Delay and risk monitoring
- Sustainability metrics and delivery consolidation
- Mobile-friendly delivery agent view

## Future improvements

- Train on the organisation's historical order, driver, weather, and travel-time records.
- Use a road-network travel-time matrix instead of straight-line distance in the OR-Tools solver.
- Store predictions and actual completion times for monitoring MAE and retraining triggers.
- Add multiple depots, driver shifts, time windows, vehicle capacities, and live traffic.

## Project structure

```text
backend/
  main.py          # FastAPI schemas, XGBoost inference and OR-Tools API
  train_eta.py     # Reproducible training/evaluation pipeline
  requirements.txt
  Dockerfile
  models/          # Generated local model and evaluation metrics (gitignored)
src/services/aiService.js  # Minimal React-to-API adapter
```
