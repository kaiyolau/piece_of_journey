import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import GiftForm from './GiftForm'

const stripePromise = loadStripe('pk_test_51LfTJUIYP2C9iMUxA1G6ULZFexkXTJ3owj5FZz6vDZDL0gkGyRhajNSy7HasAY1Z8pW0GjnRKGTgoU9v7Z8Pkauq00NRDaFhR5')

function GiftPage(props) {
  return(
        <Elements stripe={stripePromise}>
          <GiftForm answer_id={props.match.params.id} />
        </Elements>
  )
}

export default GiftPage
