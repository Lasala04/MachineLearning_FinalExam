import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Sample sales data
months = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).reshape(-1, 1)
sales = np.array([45000, 48000, 50000, 49000, 52000, 54000, 56000, 58000, 60000, 62000, 65000, 68000])

# Train model
model = LinearRegression()
model.fit(months, sales)

# Predict next 3 months
future_months = np.array([13, 14, 15]).reshape(-1, 1)
predictions = model.predict(future_months)

# Print results
print("=" * 60)
print("Sales Forecasting Results (Linear Regression)")
print("=" * 60)
for i, pred in enumerate(predictions, start=13):
    print(f"Month {i}: ${pred:,.2f}")

# CREATE VISUALIZATION
plt.figure(figsize=(12, 6))

# Plot historical data
plt.scatter(months, sales, color='#667eea', s=100, label='Actual Sales', zorder=3)

# Plot trend line
plt.plot(months, model.predict(months), color='red', linewidth=2, label='Trend Line', linestyle='--')

# Plot predictions
plt.scatter(future_months, predictions, color='#28a745', marker='*', s=400, 
            label='Forecasted Sales', zorder=3, edgecolors='black', linewidths=1.5)

# Styling
plt.title('Sales Forecasting with Linear Regression', fontsize=16, fontweight='bold')
plt.xlabel('Month', fontsize=12)
plt.ylabel('Sales ($)', fontsize=12)
plt.legend(fontsize=11)
plt.grid(True, alpha=0.3)

# Add value labels
for i, (m, s) in enumerate(zip(future_months.flatten(), predictions)):
    plt.annotate(f'${s:,.0f}', (m, s), textcoords="offset points", 
                xytext=(0,10), ha='center', fontsize=10, fontweight='bold', color='green')

plt.tight_layout()

# SAVE BEFORE SHOW
plt.savefig('sales_forecast_chart.png', dpi=300, bbox_inches='tight')
print("\n✅ Chart saved as 'sales_forecast_chart.png'")
plt.show()