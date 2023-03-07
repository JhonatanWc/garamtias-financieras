<style type="text/css">
	@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
	body{background:#ececec;}
</style>
<table align="center" border="0" cellspacing="0" cellpadding="0" style="background:#f8f8f8; width:700px;">
	<tr style="margin:0; padding:0; vertical-align:top;">
		<td style="margin:0; padding:0; padding:40px 20px; line-height:0; text-align:center;">
			<img src="https://garantiasfinancieras.com/wp-content/uploads/2020/08/LOGO-GARANTIAS-FINANCIERA.png" alt="Logo">
		</td>
	</tr>
	<tr style="margin:0; padding:0; vertical-align:top;">
		<td>
			<table style="background:#fff;  width:600px; margin:0 auto; border:0; border-radius:10px;">
				<tr style="margin:0; padding:0; vertical-align:top;">
				<td style="margin:0; padding:50px; line-height:0; text-align:center;">
						<p style="margin:0; padding:0; font-family:Poppins, sans-serif; font-size:16px; color:#3D5553; line-height:21px;">Bienvenido {{$details['correo']}}</p>
						<p style="margin:0; padding:0; font-family:Poppins, sans-serif; font-size:16px; color:#3D5553; line-height:21px;">Para recuperar tu contraseña, debes de hacer click en el siguiente enlace</p>
						<p style="margin:0; padding:0; font-family:Poppins, sans-serif; font-size:16px; color:#3D5553; line-height:21px;"><a href="{{env('APP_API_URL')}}/change-password?token={{$details['token']}}&email={{$details['correo']}}">recuperar tu contraseña</a></p>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr style="margin:0; padding:0; vertical-align:top;">
		<td style="margin:0; padding:50px; line-height:0; text-align:center;">
			<p style="margin:0; padding:0; font-family:Poppins, sans-serif; font-size:16px; color:#3D5553; line-height:21px;">¿Necesitas ayuda? <a href="">Contáctanos</a></p>
		</td>
	</tr>
</table>