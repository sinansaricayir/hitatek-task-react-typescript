# hitatek-task-react-typescript

Proje Özeti

Bu dökümantasyon, React ve TypeScript kullanılarak geliştirilen bir yazılım projesinin
ayrıntılarını içermektedir. Projede Redux Toolkit ve Redux Persist gibi kütüphaneler
kullanılmıştır. Çoklu dil desteği için i18n paketi entegre edilmiş ve İngilizce ve Türkçe olarak
çalışmaktadır. Proje, kullanıcıların giriş yapabileceği bir oturum açma ekranıyla başlar.
Kullanıcılar henüz üye değilse, kayıt bölümünden üye olabilirler ve ardından ana sayfaya
erişebilirler. Kullanıcılar, ana sayfada sepetlerine ürün ekleyebilirler.

Eklenen ürünler, sağ köşedeki küçük ekranda ve başlıkta bulunan sepet ikonunda görsel
olarak temsil edilecektir. "admin" kullanıcı adı ve şifre ile giriş yapılması durumunda,
kullanıcılar yönetici paneline yönlendirilecek ve hem kullanıcı hem de yönetici sayfalarına
erişim sağlayabileceklerdir. Rotaların korunması için korumalı rotalar kullanılmış ve yönetici
girişi yaparak yeni ürünler eklenebilir.

Kullanılan Teknolojiler

React: Kullanıcı arayüzü için kullanılan JavaScript kütüphanesi.
TypeScript: JavaScript'e ek olarak tip güvenliği sağlayan bir programlama dili.
Redux Toolkit: Redux durum yönetim kütüphanesi. Uygulama durumunun merkezi olarak
yönetilmesini sağlar.
Redux Persist: Redux durumunun yerel depoda saklanmasını sağlayan kütüphane.
i18n: Çoklu dil desteği için kullanılan bir paket.

Proje Ayrıntıları

Oturum Açma ve Kayıt Olma
Kullanıcılar, uygulamaya giriş yapabilmek için oturum açma ekranıyla karşılaşırlar.
Henüz üye değillerse, kayıt bölümünden yeni bir hesap oluşturabilirler.

Ana Sayfa ve Sepet İşlemleri
Kullanıcılar, başarılı bir giriş yaptıktan sonra ana sayfaya yönlendirilirler.
Ana sayfada, kullanıcılar sepetlerine ürün ekleyebilirler.
Eklenen ürünler, sağ köşedeki küçük ekranda ve başlıktaki sepet ikonunda görüntülenir.

Kullanıcı ve Yönetici Sayfaları
Kullanıcılar, "admin" kullanıcı adı ve şifresi ile giriş yapabilirler.
"admin" kullanıcısı giriş yaptığında, yönetici paneline yönlendirilir.
Yönetici paneli, kullanıcının hem kullanıcı hem de yönetici sayfalarına erişim sağlamasını
sağlar.

Korunmalı Rotalar
Proje içerisinde, yetkisiz erişimi önlemek için korumalı rotalar kullanılmıştır.
Kullanıcı girişi gerektiren sayfalara erişim, korumalı rotalar kullanılarak sağlanır.

Yeni Ürün Ekleme
Başlangıç olarak default datalar yüklenecektir.
Yönetici girişi yapıldığında, yeni ürünler eklenebilir.
Yönetici panelindeki gerekli formlar doldurularak yeni ürünler kaydedilir.

Proje Kurulumu ve Çalıştırma
Projeyi herhangi bir metin düzenleyicide, örneğin VS Code'da açarak, terminal ekranında
npm install komutunu kullanarak gerekli paketleri kurabilirsiniz.
Ardından, npm start komutunu kullanarak projeyi çalıştırabilirsiniz.

Sonuç
Bu dökümantasyon, React ve TypeScript kullanılarak geliştirilen projenin ayrıntılarını ve
kullanılan teknolojileri içermektedir. Projede Redux Toolkit, Redux Persist ve i18n paketi gibi
önemli araçlar kullanılmıştır. Kullanıcılar, oturum açma, kayıt olma, ürün ekleme ve yönetici
paneli gibi işlevleri gerçekleştirebilirler. Rotaların korunması ve kullanıcı deneyimi gözetilerek
geliştirilen bu proje, kullanıcıların ihtiyaçlarını karşılamak için tasarlanmıştır.
