<template>
<div>
  <h1>Pay now for demo classes</h1>
    
        <div class="my-8">
          <button
            @click="order"
            class="bg-black text-white font-bold w-full text-2xl text-center p-2 rounded-lg border-4 border-black"
          >
            Pay ₹ 1
          </button>
        </div>
        <p v-if="payment_id" class="text-xl text-center font-bold">
          Your Order was succesful, here is your payment reference #{{
            payment_id
          }}
        </p>
</div>
</template>

<script>

export default {
   data(){
       return {
           payment_id: null
       };
      
   },
    methods:{
          order() {
      const self = this;
      const rzp_options = {
        key: process.env.RAZORPAY_KEY,
        amount: 100,
        name: "Patshaala",
        description: "Demo payment",
        handler: function(response) {
          self.$toast.success(`Payment Succesful`, {
            position: "bottom-center",
            theme: "outline",
            duration: 5000
          });
          self.payment_id = response.razorpay_payment_id;
        },
        modal: {
          ondismiss: function() {
            self.$toast.error(`Payment Failed`, {
              position: "bottom-center",
              theme: "outline",
              duration: 5000
            });
          }
        },
        prefill: {
          email: "test@email.com",
          contact: +914455667788
        },
        theme: {
          color: "#667eea"
        }
      };
      const rzp1 = new Razorpay(rzp_options);
      rzp1.open();
    }

}
};
</script>
<style>
.bg-green-400 {
  background-color: #68d391;
}
.bg-indigo-500 {
  background-color: #667eea;
}
</style>