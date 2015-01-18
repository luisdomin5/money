/**
 * Created by Moti on 1/18/2015.
 */
(function(w){

    function SubCategory(name){
        this.name = name || '';
    }

    function Category(name, subs){
        this.name = name || '';
        this.subs = subs || [];
    }

    function PayMethod(name){
        this.name = name || '';
    }

    function Transaction(){

    }

    var ns = {
        Category : Category,
        SubCategory : SubCategory,
        PaymentMethod : PayMethod,
        Transaction : Transaction
    }

    w.classes = ns;

})(window)