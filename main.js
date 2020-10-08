$(document).ready(function(){
    $(function(){
        $(".button").on("click", function(){

            $(".selectDigit").on("change", function(){
                x = $(this).val();
            }).change();

            let length = x,
            character ="qwertyuioplkjhgfdsdaszxcvbnmAQWSEDRFTGYHUJIKOLPMNBVCXZ,.l/';[]=-0987654321!@#$%^&*90-=[';/.,++-)*87!!||~~~"

            retval = "";

            for (let i = 0, n = character.length; i < length; ++i){
                retval += character.charAt(Math.floor(Math.random() * n));
            }

            $(".result").text(retval).addclass("animate");
            setTimeout(function(){
                $(".result").removeclass("animate");
            }, 400);
        })
    })
})