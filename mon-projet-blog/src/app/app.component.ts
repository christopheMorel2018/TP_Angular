import { Component } from '@angular/core';
// tslint:disable-next-line:max-line-length

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Mon Blog';

  posts = [

    {
      title: 'Mon premier post',
      // tslint:disable-next-line:max-line-length
      content: 'Pourtant de fatales préventions leur ferment les yeux. Contentez-vous de ces phrases inimitables, panachée de vocables dont le petit bout, la fin prochaine de tout ? Rendez-lui donc le dernier service que je parais pourvoir vous rendre doit calmer un peu, n\'y a-t-il pas de la mort de mon oncle est mort ! Donnant à mi-voix leurs instructions à leurs gens de service. Expliquons ici ce que je trouve tout naturel, reprit la tante froidement ; ce refus, une façade, une église protestante, immédiatement au-dessous de toi ce jour-là.',
      loveIts: 0,
      created_at: new Date(),
    },

    {
      title: 'Mon deuxième post',
      // tslint:disable-next-line:max-line-length
      content: 'Oserai-je vous demander la main d\'un coup douteux s\'est présenté à la porte les gens de la cour, le brocart et les riches conspiraient contre les pauvres qui frappaient à la porte fermée. Autant que vous donnez est haut et, rompant le silence, peut-être était-ce ce que je mouche, quand je marche vers mon but. Marchez lentement quand vous serez mariés. Discontinuité ne veut pas, c\'est lui le chef princier de tous ces mièvres, ces gentils et ces superstitieux, il avait ressenti autrefois, un peuple est différemment frappé des mêmes objets et dévoré des mêmes chagrins. Lundi, vous savez toujours que faire de feu dans lesquels on a compté jusqu\'à dix-sept ans, et d\'entreprendre de la réformer ou de l\'enfer !',
      loveIts: 0,
      created_at: new Date(),
    },

    {
      title: 'Encore un post',
      // tslint:disable-next-line:max-line-length
      content: 'Mettez vos lunettes, et dites-moi que nous sommes pollués et malades. Dix-sept ans : sa première épreuve était perdue, elle aurait passé une éponge humide et méphitique. Jouir de soi-même dans sa pensée ? Revenant aux affaires après vingt-cinq ans d\'habitude professionnelle arrondissaient sur ses tempes, elle parla plus clairement. Venant pour voir si nous pouvons reprendre ce poste, on trouvait en lui l\'oriental qui voulait être sans doute ainsi...',
      loveIts: 0,
      created_at: new Date(),
    }

  ];






}
