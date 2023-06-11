import { getFirestore, setDoc } from "firebase/firestore"
//database importálása
import app from "../lib/firebase.config"

//database importálása
const db = getFirestore(app)

const Firestore = {
    writeDoc: (...args) => {
        return new Promise(resolve => {
            try {

            } catch (e) {

            }
        })
    }
}