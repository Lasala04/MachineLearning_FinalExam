from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt
import numpy as np

# Customer data: [days_since_purchase, total_spent, engagement_score]
customers = np.array([
    [5, 250, 8],      # Active
    [120, 50, 2],     # Will Churn
    [10, 400, 9],     # Active
    [90, 75, 3],      # Will Churn
    [15, 300, 7],     # Active
    [100, 60, 1],     # Will Churn
    [8, 350, 8],      # Active
    [85, 80, 4],      # Will Churn
    [20, 280, 6],     # Active
    [110, 45, 2],     # Will Churn
])

labels = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]  # 0=Active, 1=Will Churn

customer_ids = ['C001', 'C002', 'C003', 'C004', 'C005', 
                'C006', 'C007', 'C008', 'C009', 'C010']

# Train Decision Tree
model = DecisionTreeClassifier(max_depth=3, random_state=42)
model.fit(customers, labels)

# Predict for new customer
new_customer = [[45, 100, 4]]
prediction = model.predict(new_customer)
probability = model.predict_proba(new_customer)

print("=" * 60)
print("Customer Churn Prediction Results (Decision Tree)")
print("=" * 60)
print(f"\nNew Customer Profile:")
print(f"  - Days Since Last Purchase: {new_customer[0][0]}")
print(f"  - Total Spent: ${new_customer[0][1]}")
print(f"  - Engagement Score: {new_customer[0][2]}/10")
print(f"\nPrediction: {'⚠️  LIKELY TO CHURN' if prediction[0] == 1 else '✅ LIKELY TO STAY'}")
print(f"Confidence: {probability[0][prediction[0]] * 100:.1f}%")

# Print existing customer summary
print(f"\n📊 Training Data Summary:")
print(f"  - Total Customers: {len(customers)}")
print(f"  - Active Customers: {labels.count(0)}")
print(f"  - At-Risk (Churning): {labels.count(1)}")

# CREATE VISUALIZATIONS
fig = plt.figure(figsize=(16, 10))
gs = fig.add_gridspec(2, 2, hspace=0.3, wspace=0.3)

# Plot 1: Decision Tree Visualization
ax1 = fig.add_subplot(gs[0, :])
plot_tree(model, filled=True, 
          feature_names=['Days Since Purchase', 'Total Spent ($)', 'Engagement Score'],
          class_names=['Active', 'Will Churn'],
          fontsize=10,
          rounded=True,
          proportion=True)
ax1.set_title('Customer Churn Decision Tree', fontsize=16, fontweight='bold', pad=20)

# Plot 2: Days Since Purchase vs Engagement Score
ax2 = fig.add_subplot(gs[1, 0])
colors = ['green' if l == 0 else 'red' for l in labels]
sizes = [150 if l == 0 else 200 for l in labels]

ax2.scatter(customers[:, 0], customers[:, 2], c=colors, s=sizes, 
           alpha=0.6, edgecolors='black', linewidths=1.5)
ax2.scatter(new_customer[0][0], new_customer[0][2], 
           color='blue', marker='*', s=600, label='New Customer',
           edgecolors='black', linewidths=2, zorder=5)

ax2.set_xlabel('Days Since Last Purchase', fontsize=11)
ax2.set_ylabel('Engagement Score', fontsize=11)
ax2.set_title('Customer Segments - Activity vs Engagement', fontsize=13, fontweight='bold')
ax2.legend(['Active', 'Will Churn', 'New Customer'], fontsize=9, loc='upper right')
ax2.grid(True, alpha=0.3)

# Plot 3: Churn Risk Distribution
ax3 = fig.add_subplot(gs[1, 1])
categories = ['Active\nCustomers', 'At Risk\n(Will Churn)']
counts = [labels.count(0), labels.count(1)]
colors_bar = ['#28a745', '#dc3545']

bars = ax3.bar(categories, counts, color=colors_bar, 
              edgecolor='black', linewidth=2, width=0.6)
ax3.set_title('Churn Risk Distribution', fontsize=13, fontweight='bold')
ax3.set_ylabel('Number of Customers', fontsize=11)
ax3.grid(axis='y', alpha=0.3)

# Add percentages on bars
for bar, count in zip(bars, counts):
    height = bar.get_height()
    percentage = (count / sum(counts)) * 100
    ax3.text(bar.get_x() + bar.get_width()/2., height,
            f'{int(count)}\n({percentage:.1f}%)',
            ha='center', va='bottom', fontsize=11, fontweight='bold')

plt.suptitle('Customer Churn Prediction Analysis', fontsize=18, fontweight='bold', y=0.98)

# SAVE BEFORE SHOW
plt.savefig('decision_tree_churn_chart.png', dpi=300, bbox_inches='tight')
print("\n" + "=" * 60)
print("✅ Chart saved as 'decision_tree_churn_chart.png'")
print("=" * 60)
plt.show()