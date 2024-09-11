import React from 'react';
import ReservationList from './ReservationList';
import PageTitle from '../PageTitle';

function Reservation() {
  return (
    <div className="container min-h-[65vh] text-2xl font-bold ">
      <PageTitle title="예약 목록" />
      <ReservationList />
    </div>
  );
}

export default Reservation;
