var betData = {};
$(function(){
	getMemberMaterial();
})

function getMemberMaterial(){
	Send(httpUrlData.getMemberMaterial, {}, function(obj){
		var html = '';
		for(var i = 0; i < obj.data.length; i++){
			html += '<tr>'
					+ '<td class="typeCell">' + obj.data[i].playType + '</td>'
					+ '<td class="betMinCell">' + obj.data[i].playMin + '</td>'
					+ '<td class="betMaxCell">' + obj.data[i].playMax + '</td>'
					+ '<td class="itemMaxCell">' + obj.data[i].max + '</td>'
					+ '<td class="aCell">' + obj.data[i].returnAA + '</td>'
					+ '<td class="bCell">' + obj.data[i].returnAB + '</td>'
				+ '</tr>';
		}
		$(".systemCont").html(html);
	})
}