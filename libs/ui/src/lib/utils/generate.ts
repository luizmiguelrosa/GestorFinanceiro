let _generateId_counter = 0;

export function generateId(prefix = 'id'): string {
  const safePrefix = String(prefix || 'id')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^A-Za-z0-9\-_:.]/g, '') // keep characters valid for HTML id
    .replace(/^[^A-Za-z]+/, 'id'); // ensure it doesn't start with invalid chars

  // increment a module-scoped counter for uniqueness
  _generateId_counter += 1;
  const counter = _generateId_counter;

  // combine time, counter and some randomness for high uniqueness
  const unique = `${Date.now().toString(36)}${counter.toString(36)}${Math.random()
    .toString(36)
    .slice(2, 6)}`;

  return `${safePrefix}-${unique}`;
}
