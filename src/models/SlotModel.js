import axios from 'axios'

class SlotModel {
  static all(){
    return axios.get("https://whenamion.herokuapp.com/schedule")
  }
}

export default SlotModel
