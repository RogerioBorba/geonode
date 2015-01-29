(function(){
    var app = angular.module("layer_app",[]);

    app.controller("TypeController",function(){
        this.attributeType = 'C';

        this.setAttributeType = function(type){
            this.attributeType = type;
        };

        this.isSet = function(type){
            return this.attributeType === type;
        };

        this.hasSize = function(){
            if( this.attributeType === "Date"){
                return false;
            }
            else{
                return true;
            }
        };

        this.hasDecimal = function(){
            if( this.attributeType === "Number" ){
                return true;
            }
            else{
                return false;
            }
        };
    });
})();




















//var num_atr = 1;
//$(document).ready(function(){
//    $("#add-line").click(function(){
//        var $atr_list = $("#attributes-list");
//        var $input = $("#attr_name");
//        var $attr_n = $("#attr_l");

//        num_atr++;
//        $attr_n.attr("id","attr_l"+num_atr.toString());
//        $input.attr("id","attr_name"+num_atr.toString());
//        $input.attr("name","attr_name"+num_atr.toString());

//        var $line = $("#attribute_line");
//        $atr_list.html( $atr_list.html() + $line.html() );

//        $input.attr("id","attr_name");
//        $input.removeAttr("name");
//        $attr_n.attr("id","attr_l");
//    });

//    $("#remove-line").click(function(){
//        if( num_atr > 1){
//            $("#attr_l"+num_atr.toString()).remove();
//            num_atr--;
//        }
//    });
//});