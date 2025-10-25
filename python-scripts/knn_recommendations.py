from sklearn.neighbors import NearestNeighbors
import numpy as np
import matplotlib.pyplot as plt

# Sample product features: [price, rating, popularity]
products = np.array([
    [29.99, 4.5, 850],   # Product 1: Wireless Mouse
    [49.99, 4.2, 620],   # Product 2: Keyboard
    [19.99, 4.8, 920],   # Product 3: USB Cable
    [39.99, 3.9, 450],   # Product 4: Monitor Stand
    [24.99, 4.6, 780],   # Product 5: Laptop Bag
    [34.99, 4.4, 690],   # Product 6: Webcam
    [15.99, 4.7, 850],   # Product 7: Mouse Pad
    [59.99, 4.1, 540],   # Product 8: Desk Lamp
])

product_names = [
    'Wireless Mouse', 'Keyboard', 'USB Cable', 'Monitor Stand', 
    'Laptop Bag', 'Webcam', 'Mouse Pad', 'Desk Lamp'
]

# Train KNN model
knn = NearestNeighbors(n_neighbors=4)  # Find 4 nearest (including itself)
knn.fit(products)

# Find similar products to Product 0 (Wireless Mouse)
target_product_index = 0
target_product = products[target_product_index].reshape(1, -1)
distances, indices = knn.kneighbors(target_product)

# Print recommendations
print("=" * 60)
print("KNN Product Recommendation Results")
print("=" * 60)
print(f"\nCustomers who bought '{product_names[target_product_index]}' also bought:\n")

for idx, i in enumerate(indices[0][1:], 1):  # Skip first (itself)
    print(f"{idx}. {product_names[i]}")
    print(f"   Price: ${products[i][0]:.2f} | Rating: {products[i][1]}⭐ | Popularity: {products[i][2]}")
    print()

# CREATE VISUALIZATION
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Plot 1: Price vs Rating scatter plot
colors = ['red' if i == target_product_index else 'blue' if i in indices[0] else 'gray' 
          for i in range(len(products))]
sizes = [300 if i == target_product_index else 150 if i in indices[0] else 50 
         for i in range(len(products))]

ax1.scatter(products[:, 0], products[:, 1], c=colors, s=sizes, alpha=0.6, edgecolors='black', linewidths=1.5)

# Add labels to points
for i, name in enumerate(product_names):
    if i == target_product_index or i in indices[0]:
        ax1.annotate(name, (products[i, 0], products[i, 1]), 
                    fontsize=9, ha='right', xytext=(-5, 5), textcoords='offset points')

ax1.set_xlabel('Price ($)', fontsize=12)
ax1.set_ylabel('Rating (⭐)', fontsize=12)
ax1.set_title('Product Similarity - Price vs Rating', fontsize=14, fontweight='bold')
ax1.grid(True, alpha=0.3)

# Add legend
from matplotlib.patches import Patch
legend_elements = [
    Patch(facecolor='red', label='Target Product (Wireless Mouse)'),
    Patch(facecolor='blue', label='Recommended Similar Products'),
    Patch(facecolor='gray', label='Other Products')
]
ax1.legend(handles=legend_elements, loc='upper left', fontsize=9)

# Plot 2: Bar chart of recommended products
recommended_indices = indices[0][1:]  # Exclude target itself
recommended_names = [product_names[i] for i in recommended_indices]
recommended_distances = distances[0][1:]

ax2.barh(recommended_names, 1 / (recommended_distances + 0.1), color='#667eea')
ax2.set_xlabel('Similarity Score (higher = more similar)', fontsize=12)
ax2.set_title('Top 3 Product Recommendations', fontsize=14, fontweight='bold')
ax2.invert_yaxis()
ax2.grid(axis='x', alpha=0.3)

# Add values on bars
for i, (name, score) in enumerate(zip(recommended_names, 1 / (recommended_distances + 0.1))):
    ax2.text(score + 0.05, i, f'{score:.2f}', va='center', fontsize=10)

plt.tight_layout()

# SAVE THE FIGURE
output_filename = 'knn_recommendations_chart.png'
plt.savefig(output_filename, dpi=300, bbox_inches='tight')
print("=" * 60)
print(f"✅ Chart saved as '{output_filename}'")
print("=" * 60)

# Show the plot
plt.show()