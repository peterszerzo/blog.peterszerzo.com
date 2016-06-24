import {requestPost, requestPostSummaries} from '../actions/post.js';

export default [
  {
    route: '/',
    componentName: 'Home',
    props: {
      slug: 'home'
    },
    getComponentProps(state, params) {
      const {ui, posts} = state;
      return {
        ui,
        post: posts.bySlug.welcome ? posts.bySlug.home.data : null,
        posts: posts.summaries.data
      };
    },
    effects(state, params) {
      return [requestPostSummaries(), requestPost('home')];
    }
  },
  {
    route: '/projects(/)',
    componentName: 'Posts',
    getComponentProps(state, params) {
      const {ui, posts} = state;
      return {
        ui,
        activeTag: 'project',
        post: posts.bySlug.projects ? posts.bySlug.projects.data : null,
        posts: posts.summaries.data
      };
    },
    effects(state, params) {
      return [requestPostSummaries(), requestPost('projects')];
    }
  },
  {
    'route': '/blog(/)',
    'componentName': 'Posts',
    getComponentProps(state, params) {
      const {ui, posts} = state;
      return {
        ui,
        activeTag: 'blog',
        post: posts.bySlug.blog ? posts.bySlug.blog.data : null,
        posts: posts.summaries.data
      };
    },
    effects(state, params) {
      return [requestPostSummaries(), requestPost('blog')];
    }
  },
  {
    'route': '/devblog(/)',
    'componentName': 'Posts',
    getComponentProps(state, params) {
      const {ui, posts} = state;
      return {
        ui,
        activeTag: 'devblog',
        post: posts.bySlug.devblog ? posts.bySlug.devblog.data : null,
        posts: posts.summaries.data
      };
    },
    effects(state, params) {
      return [requestPostSummaries(), requestPost('devblog')];
    }
  },
  {
    route: '/about(/)',
    componentName: 'About',
    getComponentProps(state, params) {
      const {ui, posts} = state;
      return {
        ui,
        post: posts.bySlug.about ? posts.bySlug.about.data : null
      };
    },
    effects() {
      return [requestPost('about')];
    }
  },
  {
    'route': '/now(/)',
    'componentName': 'Now',
    getComponentProps(state, params) {
      const {ui, posts} = state;
      return {
        ui,
        post: posts.bySlug.now ? posts.bySlug.now.data : null
      };
    },
    effects(state, params) {
      return [requestPost('now')];
    }
  },
  {
    route: '/:slug(/)',
    componentName: 'Post',
    getComponentProps(state, params) {
      const {ui, posts} = state;
      return {
        ui,
        post: posts.bySlug[params.slug] ? posts.bySlug[params.slug].data : null
      };
    },
    effects(state, params) {
      return [requestPost(params.slug)];
    }
  }
];
