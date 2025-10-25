from sklearn.neural_network import MLPRegressor
from sklearn.preprocessing import StandardScaler
import numpy as np
import matplotlib.pyplot as plt

# Training data: [demand, competitor_price, inventory_level, season]
# Season: 0=Off-peak, 1=Peak
data = np.array([
    [100, 50, 200, 0],   # Low demand, off-peak
    [150, 55, 150, 0],   # Medium demand
    [80, 48, 250, 0],    # Low demand
    [200, 60, 100, 1],   # High demand, peak season
    [180, 58, 120, 1],   # High demand, peak
    [120, 52, 180, 0],   # Medium demand
    [250, 65, 80, 1],    # Very high demand, peak
    [90, 49, 220, 0],    # Low demand
    [160, 56, 140, 0],   # Medium demand
    [220, 62, 90, 1],    # High demand, peak
])

# Optimal prices determined by market analysis
prices = np.array([47.99, 52.99, 45.99, 59.99, 57.99, 49.99, 64.99, 46.99, 53.99, 61.99])

# Scale features for better neural network performance
scaler = StandardScaler()
data_scaled = scaler.fit_transform(data)

# Train Neural Network
model = MLPRegressor(
    hidden_layer_sizes=(10, 10),  # Two hidden layers with 10 neurons each
    max_iter=2000,
    random_state=42,
    alpha=0.001
)
model.fit(data_scaled, prices)

# Predict optimal price for new scenarios
new_scenarios = [
    [130, 53, 160, 0],  # Moderate demand, off-peak
    [210, 61, 95, 1],   # High demand, peak season
    [95, 50, 210, 0],   # Low demand, off-peak
]

new_scenarios_scaled = scaler.transform(new_scenarios)
predicted_prices = model.predict(new_scenarios_scaled)

print("=" * 60)
print("Dynamic Pricing Results (Neural Network)")
print("=" * 60)

for i, (scenario, price) in enumerate(zip(new_scenarios, predicted_prices), 1):
    season = "Peak Season" if scenario[3] == 1 else "Off-Peak"
    print(f"\nScenario {i}:")
    print(f"  - Demand Level: {scenario[0]} units")
    print(f"  - Competitor Price: ${scenario[1]:.2f}")
    print(f"  - Inventory: {scenario[2]} units")
    print(f"  - Season: {season}")
    print(f"  ➡️  Optimal Price: ${price:.2f}")

# Calculate accuracy on training data
train_predictions = model.predict(data_scaled)
mae = np.mean(np.abs(train_predictions - prices))
print(f"\n📊 Model Performance:")
print(f"  - Mean Absolute Error: ${mae:.2f}")
print(f"  - Average Accuracy: {100 - (mae / np.mean(prices) * 100):.1f}%")

# CREATE VISUALIZATIONS
fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(16, 12))

# Plot 1: Demand vs Optimal Price
colors = ['orange' if s == 0 else 'purple' for s in data[:, 3]]
ax1.scatter(data[:, 0], prices, c=colors, s=150, alpha=0.7, 
           edgecolors='black', linewidths=1.5, label='Training Data')
ax1.scatter([s[0] for s in new_scenarios], predicted_prices, 
           marker='*', s=500, c='red', edgecolors='black', linewidths=2,
           label='New Predictions', zorder=5)

ax1.set_xlabel('Demand Level', fontsize=12)
ax1.set_ylabel('Optimal Price ($)', fontsize=12)
ax1.set_title('Demand vs Optimal Pricing', fontsize=14, fontweight='bold')
ax1.legend(['Off-Peak Season', 'Peak Season', 'Predictions'], fontsize=10)
ax1.grid(True, alpha=0.3)

# Plot 2: Competitor Price vs Optimal Price
ax2.scatter(data[:, 1], prices, c=colors, s=150, alpha=0.7,
           edgecolors='black', linewidths=1.5)
ax2.plot([45, 70], [45, 70], 'r--', alpha=0.5, linewidth=2, label='Match Competitor')

ax2.set_xlabel('Competitor Price ($)', fontsize=12)
ax2.set_ylabel('Our Optimal Price ($)', fontsize=12)
ax2.set_title('Competitive Pricing Strategy', fontsize=14, fontweight='bold')
ax2.legend(fontsize=10)
ax2.grid(True, alpha=0.3)

# Plot 3: Prediction Accuracy
ax3.scatter(range(len(prices)), prices, label='Actual Price', 
           s=150, alpha=0.7, color='blue', edgecolors='black', linewidths=1.5)
ax3.scatter(range(len(train_predictions)), train_predictions, 
           label='Predicted Price', s=150, alpha=0.7, color='green',
           marker='x', linewidths=3)

ax3.set_xlabel('Product Instance', fontsize=12)
ax3.set_ylabel('Price ($)', fontsize=12)
ax3.set_title('Model Accuracy - Actual vs Predicted', fontsize=14, fontweight='bold')
ax3.legend(fontsize=10)
ax3.grid(True, alpha=0.3)

# Plot 4: Price Distribution by Season
off_peak_prices = [prices[i] for i in range(len(data)) if data[i, 3] == 0]
peak_prices = [prices[i] for i in range(len(data)) if data[i, 3] == 1]

box_data = [off_peak_prices, peak_prices]
bp = ax4.boxplot(box_data, labels=['Off-Peak', 'Peak Season'],
                 patch_artist=True, widths=0.6)

# Color the boxes
colors_box = ['orange', 'purple']
for patch, color in zip(bp['boxes'], colors_box):
    patch.set_facecolor(color)
    patch.set_alpha(0.7)
    patch.set_edgecolor('black')
    patch.set_linewidth(1.5)

ax4.set_ylabel('Price ($)', fontsize=12)
ax4.set_title('Price Distribution by Season', fontsize=14, fontweight='bold')
ax4.grid(axis='y', alpha=0.3)

# Add mean values
means = [np.mean(off_peak_prices), np.mean(peak_prices)]
ax4.plot([1, 2], means, 'ro-', markersize=10, linewidth=2, label='Average Price')
for i, mean in enumerate(means, 1):
    ax4.text(i, mean + 1, f'${mean:.2f}', ha='center', fontsize=10, fontweight='bold')

ax4.legend(fontsize=10)

plt.suptitle('Dynamic Pricing Optimization with Neural Network', 
            fontsize=18, fontweight='bold', y=0.995)
plt.tight_layout()

# SAVE BEFORE SHOW
plt.savefig('neural_network_pricing_chart.png', dpi=300, bbox_inches='tight')
print("\n" + "=" * 60)
print("✅ Chart saved as 'neural_network_pricing_chart.png'")
print("=" * 60)
plt.show()