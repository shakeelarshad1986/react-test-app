export function queryBuilder(obj) {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "") {
        delete obj[key];
      }
    });
    const url = Object.entries(obj)
      .map((pair) => pair.map(encodeURIComponent).join("="))
      .join("&");
    return url.length ? `?${url}` : "";
  }
  