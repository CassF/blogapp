$(() => {
    $.ajax({
        url: '/',
            method: 'POST',
            data: 'req.session.blogs'
            
        })
        .then((data) =>  {
            let blogList = data;
            for (let i = 0; i < blogs.length; i++) {
                console.log(blogList[i]);
                $("#blogList").append(`<p>${blogList}</p>`);
            }
    });
});