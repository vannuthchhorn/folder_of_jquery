$(document).ready(function(){
    $('#show').on('click',function(){
        var url="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true";
        $.ajax({
            url:url,
            datatype:'json',
            success:function(data){
                var result="";
                data.hits.forEach(item=>{
                    const{userImageURL, largeImageURL, user_id, likes, views, comments, favorites, user}=item;
                    result+=`
                        <div class="card shadow-lg mt-5">
                            <div class="card-header">
                                <img src="${userImageURL}"class="img-fluid rounded-circle" width="40">
                                ${user}
                                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal">view</button>
                            </div>
                            <div class="card-body">
                                <img src="${largeImageURL}" class="img-fluid">
                            </div>
                            <div class="card-footer">
                            
                            </div>
                        </div>


                        <div class="modal fade" id="myModal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <img src="${userImageURL}"class="img-fluid rounded-circle" width="40">&nbsp;
                                        ${user}
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <img src="${largeImageURL}" class="img-fluid">
                                    </div>
                                    <div class="modal-footer">
                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item">&nbsp;<i class="material-icons  float-left text-primary">thumb_up</i>${likes}</li>
                                        <li class="list-group-item">&nbsp;<i class="material-icons  float-left text-warning">comment</i>${comments}</li>
                                        <li class="list-group-item">&nbsp;<i class="material-icons  float-left text-danger">favorite_border</i>${favorites}</li>
                                        <li class="list-group-item">&nbsp;<i class="material-icons  float-left text-success">visibility_off</i>${views}</li>
                                    </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    `;
                });
                $('#result').append(result);
            }
        });
    });
});