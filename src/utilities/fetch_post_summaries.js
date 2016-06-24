export default function fetchPostSummaries() {
  return fetch('/api/posts/index.json').then(res => res.json());
}
