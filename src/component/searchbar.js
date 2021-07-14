import { useEffect, useState } from "react";
import Detail from "./videodetail";
import List from "./videolist";
import YTSearch from "youtube-api-search";
import { useForm, Controller } from "react-hook-form";
import "./searchbar.css";
const API_KEY = "AIzaSyBG2yv845PDorRdjOyHVJSFs7wvrHOgJ-A";

function Search() {
  const { control, handleSubmit, formState } = useForm({
    // defaultValues: { ...initialValues },
    mode: "onChange",
  });
  const [term, setTerm] = useState("");
  const [mainTerm, setMainTerm] = useState("");
  const [videos, setVideos] = useState();
  const [main, setMain] = useState();
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    setLoading(true);
    setTerm(mainTerm);
  };
  useEffect(() => {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      console.log("yt mai hunn");

      setVideos(videos);
      setMain(videos[0]);
      setLoading(false);
    });
    console.log(videos, main, term);
  }, [term]);
  if (!videos || !main) {
    return <div className="spinner-border text-primary spinner-position"></div>;
  }
  if (loading) {
    return <div className="spinner-border text-primary spinner-position"></div>;
  }

  //     const Lists=videos.map((video)=>{
  //         const imageUrl=video.snippet.thumbnails.default.url;
  //     return(
  //       <button onClick={()=>{setMain(video)}}>
  //           <div className="row block">          <div className="video-list-media">
  //                <div className="media-left">
  //                    <img className="media-object" src={imageUrl}></img>
  //                </div>
  //                <div className="media-body">
  //                    <div className="media-heading">
  //                        {  video.snippet.title}
  //                    </div>
  //                </div>
  //            </div>
  //            </div>

  //       </button>
  //     );
  // })
  return (
    <div className="body">
       
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="logo">
              Welcome {localStorage.getItem('user')} !!
          </div>
        <div class="input-group bar">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(event) => {
              setMainTerm(event.target.value);
            }}
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={onSubmit}
          >
            search
          </button>
        </div>
      </form>
      
      <ul className="cont">
        <li className="video_detail">
          <div>
            <Detail main={main} />
          </div>
        </li>
        {/* <List videos={videos} /> */}
        {/* <div className="table-wrapper-scroll-y my-custom-scrollbar container">{Lists}</div> */}
        <li>
          <div className="table-wrapper-scroll-y my-custom-scrollbar ">
            {videos.map((video) => {
              const imageUrl = video.snippet.thumbnails.default.url;
              return (
                <div className="row block">
                  <button
                    onClick={() => {
                      setMain(video);
                    }}
                  className="btn">
                    <div className="row block">
                      {" "}
                      <div className="video-list-media">
                        <div className="media-left">
                          <img className="media-object" src={imageUrl}></img>
                        </div>
                        <div className="media-body">
                          <div className="media-heading">
                            {video.snippet.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </li>
      </ul>
    
    </div>
  );
}
export default Search;
