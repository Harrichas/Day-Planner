var save = $(".saveBtn")
save.on("click", onSave)


var currentDay = null,
        date = null;

var update = function () {
    date = moment(new Date())
    currentDay.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    currentDay = $('#currentDay')
    update();
    setInterval(update, 1000);
});


var hours = [{
    id:"text-9",
    time: 9,
    description: '',
    status: 'present'
  },{
    id:"text-10",
    time: 10,
    description: '',
    status: 'present'
  },{
    id:"text-11",
    time: 11,
    description: '',
    status: 'present'
  },{
    id:"text-12",
    time: 12,
    description: '',
    status: 'present'
  },{
    id:"text-1",
    time: 13,
    description: '',
    status: 'present'
  },{
    id:"text-2",
    time: 14,
    description: '',
    status: 'present'
  },{
    id:"text-3",
    time: 15,
    description: '',
    status: 'present'
  },{
    id:"text-4",
    time: 16,
    description: '',
    status: 'present'
  },{
    id:"text-5",
    time: 17,
    description: '',
    status: 'present'
  }];


function onSave(event) {
    var value = $(this).siblings('textarea').val();
    var key = $(this).siblings("div").children().text();
    console.log(value)
    console.log(key)
   }

function onLoad() {
    var data = localStorage.getItem("hours")
    if (!data) {
        data = hours
    }
    else {
        data = JSON.parse(data);
    }
    var currentHour = Number(moment().format("H"))

    data.forEach(function (hour) {
      var hourElt = $("#" + hour.id)
      hourElt.val(hour.description)

        if(currentHour > hour.time) {
            hourElt.addClass("past")
        }
        else if(currentHour === hour.time) {
            hourElt.addClass("present")
        }
        else if(currentHour < hour.time) {
            hourElt.addClass("future")
        }

        $("#text-9").val(localStorage.getItem("9AM"));
        $("#text-10").val(localStorage.getItem("10AM"));
        $("#text-11").val(localStorage.getItem("11AM"));
        $("#text-12").val(localStorage.getItem("12PM"));
        $("#text-1").val(localStorage.getItem("1PM"));
        $("#text-2").val(localStorage.getItem("2PM"));
        $("#text-3").val(localStorage.getItem("3PM"));
        $("#text-4").val(localStorage.getItem("4PM"));
        $("#text-5").val(localStorage.getItem("5PM"));


    })




}


onLoad()