import {sortTypeConstants} from '../const/const'

export function quickSort(origArray, type) {
  if (origArray.length <= 1) { 
    return origArray;
  } else {

    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (type === sortTypeConstants.SCORE
        ? origArray[i].data.score <= pivot.data.score 
        : type === sortTypeConstants.CREATED 
          ? origArray[i].data.created <= pivot.data.created 
          : type === sortTypeConstants.CONTROVERSIAL 
            ? origArray[i].data.num_comments <= pivot.data.num_comments
            : null) 
      {
        left.push(origArray[i]);
      }
      else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quickSort(left, type), pivot, quickSort(right, type));
  }
}

export function dateConverter(created) {
  var date = new Date(created * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = date.getFullYear();
  var month = months[date.getMonth()];
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var time = `${day} ${month} ${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  return time;
}