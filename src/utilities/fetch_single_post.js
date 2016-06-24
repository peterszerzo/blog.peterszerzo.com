export default function fetchSinglePost(slug) {
  const fetchSummary = fetch('/api/posts/index.json')
    .then(res => res.json()).then(res => res.filter(post => post.slug === slug)[0]);
  const fetchMarkdown = fetch(`/api/posts/markdown/${slug}.md`)
    .then(res => res.text());
  return Promise.all([fetchSummary, fetchMarkdown]).then(([summary, markdown]) => {
    return Object.assign({}, summary, {markdown});
  });
}
