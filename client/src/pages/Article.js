import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content'
import AddCommentForm from '../components/AddCommentForm';
//pages
import NotFound from './NotFound';

//components
import Articles from '../components/Articles';
import CommentsList from '../components/CommentsList';

const Article = () => {
    const {name} = useParams();
    const article = articleContent.find((article) => article.name === name);
    const [articlesInfo, setArticleInfo] = useState({comments: []});
    
    useEffect(()=>{
      const fetchData = async ()=> {
        const result = await fetch(`/api/articles/${name}`);
        const body = await result.json();
        console.log(body);
        setArticleInfo(body);
      }
      fetchData();
     
    }, [name]);

    if(!article) return<NotFound/>;
    const otherArticles = articleContent.filter((article) => article.name !== name)
  return (
    <>            
        <h1 className='sm:text-4xl text-2xl
         font-bold my-6 text-grey-900'>
            {article.title}
        </h1>
            {article.content.map((paragraph, index) => (<p className='mx-auto leading-relaxed 
            text-base mb-4'> {paragraph}
            </p>
          ))}
          <CommentsList commnets={articlesInfo.comments}/>
          <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
            <h1>Other Articles</h1>
            <div>
              <Articles articles={otherArticles}/>
            </div>
    </>
  )
}

export default Article