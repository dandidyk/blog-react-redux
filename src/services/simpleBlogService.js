export default class SimpleBlogService {

    _apiBase = "https://simple-blog-api.crew.red";
  
    getResource = async (url, method, body) => {
      const res = await fetch(`${this._apiBase}${url}`,  {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method,
        body: JSON.stringify(body)
    });
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };

    getAllPosts = async () =>  await this.getResource(`/posts/`, "GET");    
  
    getPost = async (id) => await this.getResource(`/posts/${id}?_embed=comments`, "GET");

    createPost = async ( body ) => await this.getResource(`/posts/`, "POST", body);
  
    updatePost = async ( id, body ) => await this.getResource(`/posts/${id}`, "PUT", body);

    deletePost = async ( id ) => await this.getResource(`/posts/${id}`, "DELETE");
  }
  