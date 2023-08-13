function parseJSON(str) {
  let data = JSON.parse(str, (key, value) => {
    if (typeof value === 'string' && (value.includes('{') || value.includes('['))) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return value;
  });
  return data;
}

let obj = parseJSON($response.body);

$done({body: JSON.stringify(obj)});
