(function() {var implementors = {};
implementors["argmin"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"argmin/core/enum.ArgminError.html\" title=\"enum argmin::core::ArgminError\">ArgminError</a>","synthetic":false,"types":["argmin::core::errors::ArgminError"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/core/struct.IterState.html\" title=\"struct argmin::core::IterState\">IterState</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Hessian\" title=\"type argmin::core::ArgminOp::Hessian\">Hessian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Hessian\" title=\"type argmin::core::ArgminOp::Hessian\">Hessian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Jacobian\" title=\"type argmin::core::ArgminOp::Jacobian\">Jacobian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Jacobian\" title=\"type argmin::core::ArgminOp::Jacobian\">Jacobian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["argmin::core::iterstate::IterState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/core/struct.ArgminKV.html\" title=\"struct argmin::core::ArgminKV\">ArgminKV</a>","synthetic":false,"types":["argmin::core::kv::ArgminKV"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, H:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, J:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/core/struct.NoOperator.html\" title=\"struct argmin::core::NoOperator\">NoOperator</a>&lt;T, U, H, J&gt;","synthetic":false,"types":["argmin::core::nooperator::NoOperator"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/core/struct.MinimalNoOperator.html\" title=\"struct argmin::core::MinimalNoOperator\">MinimalNoOperator</a>","synthetic":false,"types":["argmin::core::nooperator::MinimalNoOperator"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"argmin/core/enum.WriteToFileSerializer.html\" title=\"enum argmin::core::WriteToFileSerializer\">WriteToFileSerializer</a>","synthetic":false,"types":["argmin::core::observers::file::WriteToFileSerializer"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/core/struct.WriteToFile.html\" title=\"struct argmin::core::WriteToFile\">WriteToFile</a>&lt;O&gt;","synthetic":false,"types":["argmin::core::observers::file::WriteToFile"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"argmin/core/enum.ObserverMode.html\" title=\"enum argmin::core::ObserverMode\">ObserverMode</a>","synthetic":false,"types":["argmin::core::observers::ObserverMode"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/core/struct.OpWrapper.html\" title=\"struct argmin::core::OpWrapper\">OpWrapper</a>&lt;O&gt;","synthetic":false,"types":["argmin::core::opwrapper::OpWrapper"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"argmin/core/enum.CheckpointMode.html\" title=\"enum argmin::core::CheckpointMode\">CheckpointMode</a>","synthetic":false,"types":["argmin::core::serialization::CheckpointMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/core/struct.ArgminCheckpoint.html\" title=\"struct argmin::core::ArgminCheckpoint\">ArgminCheckpoint</a>","synthetic":false,"types":["argmin::core::serialization::ArgminCheckpoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"argmin/core/enum.TerminationReason.html\" title=\"enum argmin::core::TerminationReason\">TerminationReason</a>","synthetic":false,"types":["argmin::core::termination::TerminationReason"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/core/struct.ArgminIterData.html\" title=\"struct argmin::core::ArgminIterData\">ArgminIterData</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Hessian\" title=\"type argmin::core::ArgminOp::Hessian\">Hessian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Jacobian\" title=\"type argmin::core::ArgminOp::Jacobian\">Jacobian</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["argmin::core::ArgminIterData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/brent/struct.BrentError.html\" title=\"struct argmin::solver::brent::BrentError\">BrentError</a>","synthetic":false,"types":["argmin::solver::brent::BrentError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.FletcherReeves.html\" title=\"struct argmin::solver::conjugategradient::beta::FletcherReeves\">FletcherReeves</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::FletcherReeves"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibiere.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibiere\">PolakRibiere</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::PolakRibiere"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibierePlus.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibierePlus\">PolakRibierePlus</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::PolakRibierePlus"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.HestenesStiefel.html\" title=\"struct argmin::solver::conjugategradient::beta::HestenesStiefel\">HestenesStiefel</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::HestenesStiefel"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.ArmijoCondition.html\" title=\"struct argmin::solver::linesearch::condition::ArmijoCondition\">ArmijoCondition</a>","synthetic":false,"types":["argmin::solver::linesearch::condition::ArmijoCondition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.WolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::WolfeCondition\">WolfeCondition</a>","synthetic":false,"types":["argmin::solver::linesearch::condition::WolfeCondition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.StrongWolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::StrongWolfeCondition\">StrongWolfeCondition</a>","synthetic":false,"types":["argmin::solver::linesearch::condition::StrongWolfeCondition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.GoldsteinCondition.html\" title=\"struct argmin::solver::linesearch::condition::GoldsteinCondition\">GoldsteinCondition</a>","synthetic":false,"types":["argmin::solver::linesearch::condition::GoldsteinCondition"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/solver/particleswarm/trait.Position.html\" title=\"trait argmin::solver::particleswarm::Position\">Position</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/particleswarm/struct.Particle.html\" title=\"struct argmin::solver::particleswarm::Particle\">Particle</a>&lt;T&gt;","synthetic":false,"types":["argmin::solver::particleswarm::Particle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"argmin/solver/simulatedannealing/enum.SATempFunc.html\" title=\"enum argmin::solver::simulatedannealing::SATempFunc\">SATempFunc</a>","synthetic":false,"types":["argmin::solver::simulatedannealing::SATempFunc"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/cauchypoint/struct.CauchyPoint.html\" title=\"struct argmin::solver::trustregion::cauchypoint::CauchyPoint\">CauchyPoint</a>","synthetic":false,"types":["argmin::solver::trustregion::cauchypoint::CauchyPoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/dogleg/struct.Dogleg.html\" title=\"struct argmin::solver::trustregion::dogleg::Dogleg\">Dogleg</a>","synthetic":false,"types":["argmin::solver::trustregion::dogleg::Dogleg"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/steihaug/struct.Steihaug.html\" title=\"struct argmin::solver::trustregion::steihaug::Steihaug\">Steihaug</a>&lt;P&gt;","synthetic":false,"types":["argmin::solver::trustregion::steihaug::Steihaug"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()