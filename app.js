/* showTime function'ı oluştur */
//oluşturduğun function'da new Date()'i çalıştır
//saati dakikayı ve saniyeyi seç
//pm ve am'i ayarlar
//setTimeout oluştur
// hepsini birleştir ve div'e inner.Text yap

function showTime() {
  const clock = document.getElementById("MyClockDisplay")
  let newDate = new Date()
  let hours = newDate.getHours()
  let minutes = newDate.getMinutes()
  let seconds = newDate.getSeconds()
  let val

  if (hours >= 12) {
    val = "PM"
  } else {
    val = "AM"
  }

  if (seconds < 9) {
    seconds = "0" + seconds
  } else if (minutes < 9) {
    minutes = "0" + minutes
  }

  clock.innerText = hours + " : " + minutes + " : " + seconds + " " + val
  setTimeout(showTime, 100)
}
showTime()
