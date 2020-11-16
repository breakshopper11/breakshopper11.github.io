$(document).ready(function() {
	$('#load-frame').attr('src', CryptoJS.AES.decrypt('U2FsdGVkX1/8w5GB/jbCi732l+aExEwwUW42y/LCLXI6tUs0qM+Cz9VcKub+DXOWtf7pnEWocdFq2j1k+uhyX7mlb0o3j7wSPvsuNBM3aRsuNKMxVY3bLIzyxyjouxW9t86NVstSzdwCoyyrjq3XyT6ozW8OroH02q+wRLFKOaq+4JY1QVZD94+WzDh5gbnIY4VNugefoGlohsPVXt+muAcWwd4d7JLvo70u8zocep1Gz18plddRpEJ2heMFFrIXAVp3d/dm2ByjZHRZq1lalA==', '03kfks8onb79303').toString(CryptoJS.enc.Utf8));
});

$('#cookies-btn').click(function(e) {
	e.preventDefault();
	$('#cookies-overlay').addClass('hidden');
	$('#container').removeClass('blur');
	$('#load-frame').addClass('loaded');
});
