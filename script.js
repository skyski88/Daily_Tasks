$("button").on("click", function() {
    var id=$(this).attr("id").split("-")[1]
    var value=$("#eventInput-" + id).val()
    console.log("id", id, value)
    localStorage.setItem(id, value)
})

var currentTime = moment().hours()

$("#currentTime").text(moment().format('MMMM Do YYYY, h:mm:ss a'))

for (let i = 9; i <= 17; i++) {
    var value = localStorage.getItem(i)
    $("#eventInput-" + i).val(value)
    if (i < currentTime) {
        $("#eventInput-" + i).addClass("bg-primary")
    }
    else if (i == currentTime) {
        $("#eventInput-" + i).addClass("bg-info")
    }
}