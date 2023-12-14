import React from 'react'
// import axios from 'axios'
import { Fade } from 'react-reveal'


const Hero = () => {

  // const [news, setNews] = useState([]);

  // const fetchNews = async () => {
  //   const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-06-13&to=2023-06-13&sortBy=popularity&apiKey=68fdff514bd24a2585ac6e43d03f9bf2");
  //   setNews(response.data.articles);
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, []);

  // const random1 = news[Math.floor(Math.random() * news.length)]

  // const random2 = news[Math.floor(Math.random() * news.length)]

  // const random3 = news[Math.floor(Math.random() * news.length)]

  // const random4 = news[Math.floor(Math.random() * news.length)]


  // if(random1){
    return (
      <div className='p-0 pt-[105px] md:flex border-b-[1px] border-gray-300'>
      
        <Fade left>
        <div className='md:w-[55%] flex flex-col items-center h-full my-5 md:my-0 p-5 -z-50'>
            
            <img  src="https://i.guim.co.uk/img/media/786b0dcd95ecfabd552747e536b87cfd0093c72a/0_273_8192_4918/master/8192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=2d0f8192bae6efb6255064ba8dcb73d9"  alt='hero_big' className='aspect-auto md:w-[600px] w-[800px] rounded-md'/>

            <p className='md:w-[600px] my-2 font-semibold text-sm text-gray-500 tracking-widest'>2023-06-17T15:00:18Z </p>

            <p className='md:w-[600px] text-[#090909]  my-2 text-3xl font-bold'>There is no moral high ground for Reddit as it seeks to capitalise on user data | John Naughton</p>

            <p className='md:w-[600px] my-2 text-gray-600 font-thin'>CEO Steve Huffman says tech giants should not be able to trawl Reddit’s huge store of data for free. But that information came from users, not the companyLike Wikipedia, Reddit is one of the wonders of the online world. Its founders once described it as “the …</p>

        </div>
        </Fade>


        <div className='md:w-[45%] p-5 -z-50'>
          
          <Fade right>
          <div className='flex pb-8 border-b-[1px] border-gray-300 '>

            <img src="https://i.guim.co.uk/img/media/443d07fa24c669c3c9fa9fb81a7911078e2a043c/187_1609_1398_838/master/1398.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=702aa4346f0c5fd8521c4500178e07f7" alt='her_small1' className='md:w-[230px] w-[150px] h-[100px] md:h-auto aspect-auto mx-3'/>

            <div>
            <p className='my-2 font-semibold text-sm text-gray-500 tracking-widest'>2023-06-17T07:00:09Z</p>

            <p className=' my-2 md:text-xl text-lg font-bold text-[#090909]'>Dictatorship? How Hitler, Stalin and Trump show it’s easier than you think</p>
            </div>

          </div>
          </Fade>

          <Fade right>
          <div className='flex py-8 border-b-[1px] border-gray-300 -z-50'>

            <img src="https://i.guim.co.uk/img/media/5a2bdada6ff3249d6d17f099b682c84bfc11f673/0_90_5760_3456/master/5760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b4fdc08f2fb604d9e91078924a7bd798" alt='her_small2' className='md:w-[230px] w-[150px] h-[100px] md:h-auto aspect-auto mx-3 -z-50'/>

            <div className=''>
            <p className='my-2 font-semibold text-sm text-gray-500 tracking-widest'>2023-06-17T06:00:06Z</p>

            <p className=' my-2 text-xl font-bold text-ellipsis text-[#090909]'>My favourite place in Europe: 17 travel writers on the country that feels like home</p>
            </div>

          </div>
          </Fade>

          <Fade right>
          <div className='flex py-8 '>

            <img src="https://i.guim.co.uk/img/media/1b5bdce11ca22b863206daf8391e0738f1a040c9/0_676_4992_2994/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1536b54a00c76e2289d9f115c7b20b10" alt='her_small3' className='md:w-[230px] w-[150px] h-[100px] md:h-auto aspect-auto mx-3'/>

            <div>
            <p className='my-2 font-semibold text-sm text-gray-500 tracking-widest'>2023-06-17T09:00:10Z</p>

            <p className=' my-2 text-xl font-bold text-[#090909]'>My wife was annoyed, I couldn’t do chores or hold the baby - even the doctors were fed up with me: my life with chronic pain</p>
            </div>

          </div>
          </Fade>

        </div>
      
      </div>
    )
  // }

  // else{
  //   return(
  //     <p>no articles found</p>
  //   )
  // }


}


export default Hero
