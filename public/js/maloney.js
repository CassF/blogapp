$(() => {

    loadAllPosts();

    $("body").on("click", "a.post", function() {
        getSinglePost($(this).attr("data-id"))
    });

    function getSinglePost(id){
        $("#putShitHere").html("");
        $.ajax({
                url: `/posts/${id}`,
                method: 'GET'
            })
            .then((data) =>  {
                let theData = data.result;
                $("#putShitHere").append(`<p>${theData.title}</p>`);
        });
    }

    function loadAllPosts(){
        $("#putShitHere").html("");
        //Read the documentation on AJAX to fully understand it, but essentially we can use AJAX to communicate with ANY API. In this case we are calling
        //our own API that we have written in Node.
        $.ajax({
                url: '/posts',
                method: 'GET'
            })
            .then((data) =>  {
                let theData = data.result;
                for (let i in  theData){
                    $("#putShitHere").append(`<a href="#" name="post" class="post" data-id="${theData[i].id}"><p>${theData[i].title}</p></a>`);
                }
        });
    }
});