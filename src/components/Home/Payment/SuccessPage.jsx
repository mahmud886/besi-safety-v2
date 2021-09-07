import React from 'react';

const getQueryVariable = (variable) => {
    var query = window.location.search.substring(1);
    console.log(query); //"app=article&act=news_content&aid=160990"
    var vars = query.split('&');
    console.log(vars); //[ 'app=article', 'act=news_content', 'aid=160990' ]
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        console.log(pair); //[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ]
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
};
const transactionId = getQueryVariable('transactionId');

const SuccessPage = (props) => {
    return (
        <div className='container'>
            <div className='py-5'>
                <div className='d-flex justify-content-center align-items-center alert alert-success'>
                    <h2 className=''>Payment Successfully Done!</h2>
                </div>
                <div className='justify-content-center align-items-center alert alert-success'>
                    <p>Transaction ID: </p>
                    <p> {transactionId} </p>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
