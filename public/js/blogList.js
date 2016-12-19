$(() => {
    $.ajax({
        url: '/',
            method: 'POST',
            data: req.session.blogs
            
        })
        .then((data) =>  {
            let blogList = data;
            for (let i in  blogList){
                console.log(blogList[i]);
                $("#blogList").append(`<p>${blogList}</p>`);
            }
    });
});