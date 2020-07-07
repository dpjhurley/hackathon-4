import React from 'react';
import Spinner from './Spinner/Spinner.jsx';
import Warning from './Warning.jsx';


const LoadMoreBtn = ({ 
    handleLoadMoreClick,
    moreResultsLoading,
    searchResults,
    nrOfResults
}) => {


    return (  
        moreResultsLoading ? (
            <Spinner />
        ): (
            searchResults.length == 0 ? (
                <div className="d-flex justify-content-center">
                    <button onClick={handleLoadMoreClick} className="btn btn-primary mb-2 center w-25 mr-3">Load more results</button>
                </div>
            ) : (
                nrOfResults > searchResults.length ? (
                     <Warning 
                        code='02'
                    />
                ) : (
                    <div className="d-flex justify-content-center">
                        <button onClick={handleLoadMoreClick} className="btn btn-primary mb-2 center w-25 mr-3">Load more results</button>
                    </div>
                )
            )        
        )
    );
}
 
export default LoadMoreBtn;
