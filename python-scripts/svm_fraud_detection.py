from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
import numpy as np
import matplotlib.pyplot as plt

# Transaction data: [amount, time_of_day, distance_from_home]
transactions = np.array([
    [50, 14, 5],      # Normal
    [120, 10, 3],     # Normal
    [5000, 3, 500],   # Fraud!
    [75, 18, 8],      # Normal
    [3000, 2, 800],   # Fraud!
    [40, 12, 4],      # Normal
    [85, 16, 6],      # Normal
    [4500, 1, 600],   # Fraud!
])

labels = [0, 0, 1, 0, 1, 0, 0, 1]  # 0=Normal, 1=Fraud

# Train model
scaler = StandardScaler()
X_scaled = scaler.fit_transform(transactions)
model = SVC(kernel='linear')
model.fit(X_scaled, labels)

# Test new transaction
new_transaction = [[200, 15, 10]]
new_scaled = scaler.transform(new_transaction)
prediction = model.predict(new_scaled)

print("=" * 60)
print("Fraud Detection Results (SVM)")
print("=" * 60)
print(f"Transaction: ${new_transaction[0][0]} at {new_transaction[0][1]}:00")
print(f"Status: {'🚨 FRAUD DETECTED' if prediction[0] == 1 else '✅ Legitimate'}")

# CREATE VISUALIZATION
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Plot 1: Amount vs Time
colors = ['green' if l == 0 else 'red' for l in labels]
sizes = [100 if l == 0 else 200 for l in labels]

ax1.scatter(transactions[:, 0], transactions[:, 1], c=colors, s=sizes, 
           alpha=0.7, edgecolors='black', linewidths=1.5)
ax1.scatter(new_transaction[0][0], new_transaction[0][1], 
           color='blue', marker='*', s=500, label='New Transaction',
           edgecolors='black', linewidths=2)

ax1.set_xlabel('Transaction Amount ($)', fontsize=12)
ax1.set_ylabel('Time of Day (Hour)', fontsize=12)
ax1.set_title('Fraud Detection Pattern - Amount vs Time', fontsize=14, fontweight='bold')
ax1.grid(True, alpha=0.3)
ax1.legend(['Legitimate', 'Fraud', 'New Transaction'], fontsize=10)

# Plot 2: Classification summary
categories = ['Legitimate', 'Fraudulent']
category_counts = [labels.count(0), labels.count(1)]
colors_bar = ['green', 'red']

bars = ax2.bar(categories, category_counts, color=colors_bar, 
              edgecolor='black', linewidth=1.5)
ax2.set_title('Transaction Classification Summary', fontsize=14, fontweight='bold')
ax2.set_ylabel('Number of Transactions', fontsize=12)
ax2.grid(axis='y', alpha=0.3)

for bar in bars:
    height = bar.get_height()
    ax2.text(bar.get_x() + bar.get_width()/2., height,
            f'{int(height)}',
            ha='center', va='bottom', fontsize=12, fontweight='bold')

plt.tight_layout()

# SAVE BEFORE SHOW
plt.savefig('fraud_detection_chart.png', dpi=300, bbox_inches='tight')
print("\n✅ Chart saved as 'fraud_detection_chart.png'")
plt.show()