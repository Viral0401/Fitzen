import React  from 'react'
// import axios from 'axios';
// import placeholder from './placeholder.jpg'
import {BsArrowRight} from 'react-icons/bs'

const News = () => {

  // const [news, setNews] = useState([]);

//   const fetchNews = async () => {
//     const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=68fdff514bd24a2585ac6e43d03f9bf2");
//     setNews(response.data.articles);
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const getRandomArticle = () => {
//     const randomIndex = Math.floor(Math.random() * news.length);
//     return news[randomIndex] || null;
//   };

//   const random1 = getRandomArticle();
//   const random2 = getRandomArticle();
//   const random3 = getRandomArticle();
//   const random4 = getRandomArticle();

  return (
    <div className='p-16 border-b-[1px] border-gray-300'>

      <h1 className='text-3xl text-[#1b1b1b] font-semibold tracking-widest mb-5 text-center md:text-left'>Trending News</h1>

      <h2 className='text-2xl text-[#684d4d] font-semibold tracking-widest mb-16 text-center md:text-left'>Stay Informed, Stay Ahead: Latest News at Your Fingertips!</h2>

      <div className='md:flex justify-between'>

      {/* {random1 && random1.urlToImage && random1.publishedAt ? (  */}
        <div>
          <img src="https://images.macrumors.com/t/U9dWJ6fomqjpKkfPbAusKqDrc_g=/1600x/article-new/2023/06/top-stories-17jun2023.jpg" alt="news1" className='h-[160px] w-[280px] '/>

          <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>2023-06-17T13:00:00Z</p>

          <p className='w-[280px] my-4 text-lg font-bold'>Top Stories: Top iOS 17 Features, M2 Ultra Chip Benchmarks, and More</p>

          <p className='w-[280px] my-4 text-md font-normal text-gray-400'>With WWDC now in the rear-view mirror, we've finally had time to really dig into the new software updates and discover some of our favorite new features and changes. New hardware was of course another big focus for WWDC, and while the Vision Pro isn't co…</p>

        </div>
      {/* ) : (
        <div>
          <img src={placeholder} alt="news1" className='h-[160px] w-[280px] '/>

          <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>API Error</p>

          <p className='w-[280px] my-4 text-lg font-bold'>API Error</p>

          <p className='w-[280px] my-4 text-md font-normal text-gray-400'>API Error</p>

        </div>
         )} */}

        {/* {random2 && random2.urlToImage && random2.publishedAt ? (  */}
          <div>
            <img src="https://www.cnet.com/a/img/resize/f24a35c160046ffbbcc2207555b8adc7e77bd26f/hub/2023/06/09/b3b35284-1d0c-4c27-8676-954abc2fad8a/lg-c3-oled-tv-2023-07.jpg?auto=webp&fit=crop&height=675&width=1200" alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>2023-06-17T11:00:00Z</p>

            <p className='w-[280px] my-4 text-lg font-bold'>LG OLED C3 Review: Sets the Standard for High-End TV Picture Quality - CNET</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>You could pay more for a nice TV, but you probably shouldn't.</p>

          </div>
          {/* ) : (
          <div>
            <img src={placeholder} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>API Error</p>

            <p className='w-[280px] my-4 text-lg font-bold'>API Error</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>API Error</p>

          </div>
         )} */}

        {/* {random3 && random3.urlToImage && random1.publishedAt ? (  */}
          <div>
            <img src="https://i.insider.com/648df6c520f78100189fe216?width=1200&format=jpeg" alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>2023-06-17T19:29:28Z</p>

            <p className='w-[280px] my-4 text-lg font-bold'>AI-generated narrators threaten voice actors hoping for audiobook gigs</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>Bringing AI to audiobooks could make them even more profitable for publishers. Voice actors are nervous about cloning.</p>

          </div>
        {/* ) : (
          <div>
            <img src={placeholder} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>API Error</p>

            <p className='w-[280px] my-4 text-lg font-bold'>API Error</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>API Error</p>

          </div>
         )} */}

        {/* {random4 && random4.urlToImage && random1.publishedAt ? (  */}
          <div>
            <img src="https://imgs.hipertextual.com/wp-content/uploads/2023/06/reddit.jpg" alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>2023-06-17T18:02:04Z</p>

            <p className='w-[280px] my-4 text-lg font-bold'>Reddit tiene un completo escándalo con los moderadores de comunidades en protesta</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>La tensión entre la administración de Reddit y su inmensa comunidad está alcanzando niveles cada vez más preocupantes. La plataforma, recordemos, ahora está cobrando cifras estratosféricas por el uso de su API, dejando prácticamente inutilizables a herramient…</p>

          </div>
          {/* ) : (
          <div>
            <img src={placeholder} alt="news1" className='h-[160px] w-[280px] '/>

            <p className='my-4 text-sm font-bold tracking-widest text-gray-500 w-[280px]'>API Error</p>

            <p className='w-[280px] my-4 text-lg font-bold'>API Error</p>

            <p className='w-[280px] my-4 text-md font-normal text-gray-400'>API Error</p>

          </div>
         )} */}

      </div>

      <div className='w-full flex items-center justify-center'>  
        <button 
        
        className='bg-[#090909] text-white rounded-2xl px-9 py-3 text-xl font-bold flex items-center justify-center gap-5 my-12 group bg-gradient-to-b from-gray-800 via-[#1b1b1b]] to-black'>

          Explore More Latest News
          <BsArrowRight size={30} className='transition duration-300 group-hover:translate-x-4 '/>

        </button>
      </div>


    </div>
  )
}

export default News

