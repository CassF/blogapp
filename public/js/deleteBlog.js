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

    // $("#deleteBlog").click((e) => {
    //     e.preventDefault();
    //     let search = $("#deleteBar").val();
    //     $.ajax({
    //         url: `/${search}`,
    //         method: 'DELETE'
    //     })
    //         .then((data) => {
    //             // console.log(data);
    //             window.location.href = "/admin";
    //         });
    // });
});

