'use strict';

const pieces = {
  royalty: [
    {
      name: 'rook',
      image: 'rook-t.png',
      id: 'r2'
    },
    {
      name: 'knight',
      image: 'knight-t.png',
      id: 'k1'
    },
    {
      name: 'bishop',
      image: 'bishop-t.png',
      id: 'b1'
    },
    {
      name: 'king',
      image: 'king-t.png',
      id: 'k'
    },
    {
      name: 'queen',
      image: 'queen-t.png',
      id: 'q'
    },
    {
      name: 'bishop',
      image: 'bishop-t.png',
      id: 'b2'
    },
    {
      name: 'knight',
      image: 'knight-t.png',
      id: 'k2'
    },
    {
      name: 'rook',
      image: 'rook-t.png',
      id: 'r1'
    }
  ],
  pawns: [
    {
      name: 'pawn',
      image: 'pawn-t.png',
      id: 'p1'
    },
    {
      name: 'pawn',
      image: 'pawn-t.png',
      id: 'p2'
    },
    {
      name: 'pawn',
      image: 'pawn-t.png',
      id: 'p3'
    },
    {
      name: 'pawn',
      image: 'pawn-t.png',
      id: 'p4'
    },
    {
      name: 'pawn',
      image: 'pawn-t.png',
      id: 'p5'
    },
    {
      name: 'pawn',
      image: 'pawn-t.png',
      id: 'p6'
    },
    {
      name: 'pawn',
      image: 'pawn-t.png',
      id: 'p7'
    },
    {
      name: 'pawn',
      image: 'pawn-t.png',
      id: 'p8'
    }
  ]
};

const transitionTime = 500;

pieces.royalty.forEach((piece) => {
  $('#royalty').append(`
    <div class='chess-piece' id='${piece.id}'>
      <img src=images/${piece.image} class='piece-image'\>
      <button class='capture-piece' piece-id='${piece.id}'>Capture!</button>
    </div>
  `);
});

pieces.pawns.forEach((piece) => {
  $('#pawns').append(`
    <div class='chess-piece' id='${piece.id}'>
      <img src=images/${piece.image} class='piece-image'\>
      <button class='capture-piece' piece-id='${piece.id}'>Capture!</button>
    </div>
  `);
});

function selectPiece(){
  $('.selected-piece').removeClass('selected-piece', transitionTime);
  let freePieces = $('.chess-piece').not('.captured');
  let selectedID =  freePieces[Math.floor(Math.random() * freePieces.length)].id;
  $(`#${selectedID}`).addClass('selected-piece', transitionTime);
}

$('#select-piece').click(selectPiece);

function capturePiece(){
  let thisPiece = $(`#${$(this).attr('piece-id')}`);
  let thisButton = $(this);
  if($(thisPiece).hasClass('captured')){
    thisPiece.removeClass('captured', transitionTime);
    thisButton.html('Capture!');
  } else {
    thisPiece.addClass('captured', transitionTime);
    thisButton.html('CAPTURED!');
  }
}

$('.capture-piece').click(capturePiece);

function resetAll(){
  $('.chess-piece').removeClass('captured', transitionTime).removeClass('selected-piece', transitionTime);
  $('.capture-piece').html('Capture!');
}

$('#reset').click(resetAll);
