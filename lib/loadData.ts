import Papa from 'papaparse';

export async function loadCSV(filename: string) {
  const response = await fetch(`/data/${filename}`);
  const csvText = await response.text();
  
  return new Promise((resolve) => {
    Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        resolve(results.data);
      }
    });
  });
}