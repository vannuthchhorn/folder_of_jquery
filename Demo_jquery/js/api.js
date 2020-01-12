$(document).ready(function(){
    $('#show').on('click', function(){
        var url="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=pink+beauty&image_type=photo&pretty=true";
        $.ajax({
            url: url,
            datatype:'json',
            success: function(data){
                var result ="";
                var counter = 0;
                data.hits.forEach(item => {
                    if(counter < 5 ) {
                    const {largeImageURL, userImageURL, user_id, likes, views, comments, favorites} = item;
                    result+=`
                        <div class="card shadow-lg mt-5">
                            <div class="card-header">
                                <img src="${userImageURL}" width="40" class="img-fluid rounded-circle ">
                                ${user_id}
                                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${user_id}">view</button>
                            </div>
                            <div class="card-body">
                                <img src="${largeImageURL}" class="img-fluid">
                            </div>
                            <div class="card-footer"></div>
                        </div>


                        <div class="modal fade" id="myModal${user_id}" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <img src="${largeImageURL}" class="img-fluid">
                                </div>
                                <div class="modal-footer justify-content-center ">
                                    <li class="list-group-item"><i class="material-icons text-primary float-right">thumb_up</i>${likes}</li>
                                    <li class="list-group-item"><i class="material-icons text-success float-right">comments</i>${comments}</li>
                                    <li class="list-group-item"><i class="material-icons text-danger float-right">favorites</i>${favorites}</li>
                                    <li class="list-group-item"><i class="material-icons text-info float-right">visibility_off</i>${views}</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    }
                    counter++;

                });
                $('#result').append(result);
            }
        });
    });
});