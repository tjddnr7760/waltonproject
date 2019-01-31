var Iamport = require('iamport');
var iamport = new Iamport({
  impKey: '3896330295252123',
  impSecret: 'dOatHlw3dsIxPLLKi0iv7xS1KKjg4gWh47LMshPGKydAkYkCZC76a08VKrbPH87MfSyHaooUXBuhAPTA'
});

// 아임포트 고유 아이디로 결제 정보를 조회
iamport.payment.getByImpUid({
  imp_uid: 'imp92825396'  
}).then(function(result){
  // To do
}).catch(function(error){
  // handle error
});

// 상점 고유 아이디로 결제 정보를 조회
iamport.payment.getByMerchant({
  merchant_uid: 'your merchant_uid'  
})

// 상태별 결제 정보 조회
iamport.payment.getByStatus({
  payment_status: 'your payment_status'  
})