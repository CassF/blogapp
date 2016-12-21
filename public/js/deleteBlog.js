$(() => {

    $("#deleteBlog").click((e) => {
        e.preventDefault();
        let search = $("#deleteBar").val();
        $.ajax({
            url: `/admin/${search}`,
            method: 'DELETE'
        })
            .then((data) => {
                // console.log(data);
                window.location.href = "/admin";
            });
    });

    $("#title").click((e) => {
        e.preventDefault();
        let title = $("#title").val();
        $.ajax({
            url: `/${title}`,
            method: 'GET'
        })
            .then((data) => {
                console.log(title);
                window.location.href = "/:title";
            });
    });
});

