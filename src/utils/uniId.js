export function genUUId() {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return "_" + head + tail + "_";
  }