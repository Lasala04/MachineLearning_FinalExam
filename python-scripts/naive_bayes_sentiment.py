import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import matplotlib.pyplot as plt
import numpy as np

# Sample customer reviews
reviews = [
    "This product is amazing! Love it!",
    "Terrible quality, waste of money",
    "Best purchase ever, highly recommend",
    "Broke after one day, very disappointed",
    "Excellent value for money",
    "Cheap and poorly made",
    "Absolutely love this product!",
    "Do not buy, complete garbage",
    "Five stars! Perfect!",
    "Awful experience, returning it",
]

labels = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]  # 1=Positive, 0=Negative

# Train model
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(reviews)
model = MultinomialNB()
model.fit(X, labels)

# Test prediction
new_review = ["This is pretty good quality"]
new_vectorized = vectorizer.transform(new_review)
prediction = model.predict(new_vectorized)

print("=" * 60)
print("Sentiment Analysis Results (Naive Bayes)")
print("=" * 60)
print(f"Review: {new_review[0]}")
print(f"Sentiment: {'Positive 😊' if prediction[0] == 1 else 'Negative 😞'}")

# CREATE VISUALIZATION
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Plot 1: Bar chart
sentiments = ['Positive', 'Negative']
counts = [sum(labels), len(labels) - sum(labels)]
colors = ['#28a745', '#dc3545']

bars = ax1.bar(sentiments, counts, color=colors, edgecolor='black', linewidth=1.5)
ax1.set_title('Customer Sentiment Distribution', fontsize=14, fontweight='bold')
ax1.set_ylabel('Number of Reviews', fontsize=12)
ax1.grid(axis='y', alpha=0.3)

# Add value labels on bars
for bar in bars:
    height = bar.get_height()
    ax1.text(bar.get_x() + bar.get_width()/2., height,
            f'{int(height)}',
            ha='center', va='bottom', fontsize=12, fontweight='bold')

# Plot 2: Pie chart
ax2.pie(counts, labels=sentiments, colors=colors, autopct='%1.1f%%', 
        startangle=90, textprops={'fontsize': 12, 'fontweight': 'bold'},
        wedgeprops={'edgecolor': 'black', 'linewidth': 1.5})
ax2.set_title('Sentiment Percentage', fontsize=14, fontweight='bold')

plt.tight_layout()

# SAVE BEFORE SHOW
plt.savefig('sentiment_analysis_chart.png', dpi=300, bbox_inches='tight')
print("\n✅ Chart saved as 'sentiment_analysis_chart.png'")
plt.show()