import React, { useEffect, useState } from "react";

function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBlogDataFromWP = async () => {
      try {
        const res = await fetch(
          "http://gaming.local/wp-json/wp/v2/posts?_embed"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const resJson = await res.json();
        setData(resJson);
        localStorage.setItem("blogs", JSON.stringify(resJson));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getBlogDataFromWP();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {/* Render your blog data here */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            {post["_embedded"]["wp:featuredmedia"] && (
              <img
                src={post["_embedded"]["wp:featuredmedia"][0].source_url}
                alt={post["_embedded"]["wp:featuredmedia"][0].alt_text}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;
