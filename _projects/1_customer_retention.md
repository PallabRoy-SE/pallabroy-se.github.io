---
layout: page
title: "Autonomous Subscription Retention System"
description: "An autonomous retention engine that optimizes operations pipelines and unlocks high-value billable hours by automating prediction and strategic decision logic."
importance: 1
category: MLOps and Agentic AI
github: https://github.com/PallabRoy-SE/customer_retention_ai_agent
---

## The Problem

Senior partners and lead consultants were losing up to 20% of their work week playing "data detective"—manually digging through logs and spreadsheets to identify which accounts were stalling or which projects needed urgent interventions. This "Capacity Tax" completely drained expensive billable capacity that could have been used to acquire new clients or scale active pipelines.

## Key Decisions

**XGBoost Classifier for Risk Modeling**: Chosen over standard linear models or flat spreadsheets because spreadsheets can only track simple linear thresholds. XGBoost handles complex, non-linear interactions, such as mapping how a multi-year contract type behaves when paired with a sudden spike in negative sentiment from support logs.

**ZenML for Data Pipelines**: Integrated to lock in strict training-serving parity. This ensures that feature engineering code remains completely identical between historical training runs and live production evaluation, preventing the model from outputting confident but broken predictions when deployed.

**MLflow and Evidently Telemetry Framework**: Deployed to prevent "silent failures". MLflow manages version control for every model iteration, while Evidently actively monitors live input distributions to flag data drift if real-world client behavior or competitors shift.

## Results

| Metric | Outcome |
| :--- | :--- |
| **Recall Score** | 77% (Optimized to minimize expensive False Negatives) |
| **Triage Automation** | 80% of accounts automated |
| **Business Impact** | Reclaimed ~20% of senior billable hours |

## What I Learned

Optimizing for Recall is often more critical than Precision in business-critical retention systems where the cost of a missed opportunity far outweighs the cost of a false alarm.

---
*Built as an independent project to demonstrate production-grade MLOps.*
