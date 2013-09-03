$(document).ready(function(){
    $("#tbl_data").tablesorter({
        sortList:[[0,0]], widthFixed: true, widgets: ['zebra']
    });

    function show_page() {
        currentPage += direct;
        if (currentPage <= 0 || currentPage > page) {
            currentPage -= direct;
            return;
        }

        var begin = (currentPage - 1) * pageSize;
        var end = begin + pageSize;
        if (end > length) {
            end = length;
        }

        $("#tbl_data tbody tr").hide();

        $("#tbl_data tbody tr").each(function(i) {
            if (i >= begin && i < end) {
                $(this).show();
            }
        });
    }

    var pageSize = 6;
    var currentPage = 1;
    var direct = 0;
    var length = $("#tbl_data tbody tr").length;
    var page;

    page = (length % pageSize) == 0 ? (length / pageSize)
        : Math.floor(length / pageSize) + 1;

    currentPage = 1;
    show_page();

    $("#pagination a").each(function(i) {
        $(this).click(function() {
            //$("#tbl_data").tablesorter({sortList:[[0,0]]});

            switch (i)
            {
                case 0:
                    currentPage = 1;
                    direct = 0;
                    show_page();
                    break;
                case 1:
                    direct = -1;
                    show_page();
                    break;
                case 2:
                    direct = 1;
                    show_page();
                    break;
                case 3:
                    direct = 0;
                    show_page();
                    break;
                case 4:
                    currentPage = 1;
                    direct = 0;
                    pageSize = length;
                    page = 1;
                    show_page();
                    break;
            }

            return false;
        });
    });
});